import { useEffect, useState } from "react";
import { API_URL } from "../config.jsx";
import "../App.css";

async function readJsonOrText(res) {
  const text = await res.text();
  if (!text) return null;

  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
}

export default function BookingRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [budget, setBudget] = useState("");
  const [serviceType, setServiceType] = useState("starter");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`${API_URL}/booking-request`, {
        method: "GET",
      });
      if (!res.ok) return;
      const data = await res.json();
      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const validateFrontend = () => {
    if (name.trim().length < 3) return "Name must be at least 3 characters.";

    const emailValue = email.trim().toLowerCase();
    if (!emailValue.match(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/)) {
      return "Invalid email address.";
    }

    if (phoneNumber.trim()) {
      const digits = phoneNumber.replace(/\D/g, "");
      if (digits.length !== 10) return "Phone number must be 10 digits.";
    }

    const b = Number(budget);
    if (Number.isNaN(b) || b < 100) return "Budget must be at least $100.";

    if (serviceType === "starter" && b < 499) return "Starter requires $499 minimum.";
    if (serviceType === "professional" && b < 999) return "Professional requires $999 minimum.";
    if (serviceType === "enterprise" && b < 1999) return "Enterprise requires $1999 minimum.";

    return null;
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setPhoneNumber("");
    setBudget("");
    setServiceType("starter");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);

    const error = validateFrontend();
    if (error) {
      setMessage(error);
      setIsError(true);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/booking-request`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phoneNumber: phoneNumber.trim(),
          budget: Number(budget),
          serviceType: serviceType, // "starter" | "professional" | "enterprise"
        }),
        // IMPORTANT: do not add credentials here
      });

      const data = await readJsonOrText(res);

      if (res.status === 201) {
        setMessage("Booking submitted successfully.");
        setIsError(false);
        clearForm();
        await fetchBookings();
      } else {
        const msg = data?.message || `Request failed (${res.status}).`;
        setMessage(msg);
        setIsError(true);
      }
    } catch (err) {
      console.error(err);
      setMessage("Network error.");
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`${API_URL}/booking-request/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (res.ok) fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteBooking = async (id) => {
    const ok = window.confirm("Delete this booking?");
    if (!ok) return;

    try {
      const res = await fetch(`${API_URL}/booking-request/${id}`, {
        method: "DELETE",
      });
      if (res.ok) fetchBookings();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="booking-page">
      <section className="booking-header">
        <h1>Book a Consultation</h1>
        <p>Tell us what you need. We will follow up with next steps.</p>
      </section>

      <div className="booking-container">
        <form onSubmit={handleSubmit} className="booking-form">
          <input
            className="form-input"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="form-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="form-input"
            placeholder="Phone number (optional)"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <select
            className="form-input"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
          >
            <option value="starter">Starter</option>
            <option value="professional">Professional</option>
            <option value="enterprise">Enterprise</option>
          </select>

          <input
            className="form-input"
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <button className="cta-button" disabled={isLoading}>
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {message && (
          <div className={`message-box ${isError ? "error" : "success"}`}>
            {message}
          </div>
        )}

        <section className="bookings-list">
          <h2>Bookings</h2>

          {bookings.length === 0 ? (
            <p>No bookings yet.</p>
          ) : (
            <div className="bookings-grid">
              {bookings.map((b) => (
                <div key={b.id} className="booking-item">
                  <strong>
                    #{b.id} {b.name}
                  </strong>

                  <div>{b.email}</div>

                  <div className="budget">
                    {b.serviceType} ${b.budget}
                  </div>

                  <div>Status: {b.status}</div>

                  <div className="form-buttons">
                    <button type="button" onClick={() => updateStatus(b.id, "confirmed")}>
                      Confirm
                    </button>
                    <button type="button" onClick={() => updateStatus(b.id, "cancelled")}>
                      Cancel
                    </button>
                    <button type="button" onClick={() => deleteBooking(b.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
