import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Login from "./Login";

function App() {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [capacity, setCapacity] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state
  const [token, setToken] = useState(""); // Token state
  const [loggedIn, setLoggedIn] = useState(false); // Login state

  useEffect(() => {
    if (token) {
      fetchEvents();
    }
  }, [token]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/V1/api/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setEvents(response.data.data);
      setLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.error("Failed to fetch events:", error);
    }
  };

  const handleCreateEvent = async () => {
    try {
      await axios.post(
        "http://localhost:3001/V1/api/events",
        {
          name,
          date,
          location,
          description,
          capacity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Event created successfully");
      fetchEvents();
    } catch (error) {
      alert("Failed to create event");
    }
  };

  const handleLogin = (token) => {
    setToken(token);
    setLoggedIn(true);
  };

  return (
    <div>
      <h1>Event Booking App</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="main-container">
          <div className="create-event">
            <h2>Create Event</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input"
            />
            <input
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="input"
              style={{ marginBottom: "10px" }}
            />
            <input
              type="text"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="input"
              style={{ marginBottom: "10px" }}
            />
            <button onClick={handleCreateEvent} className="button">
              Create Event
            </button>
          </div>
          <div>
            <h2>Events</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="card-container">
                {events.map((event) => (
                  <div key={event._id} className="card">
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Location: {event.location}</p>
                    <p>Description: {event.description}</p>
                    <p>Capacity: {event.capacity}</p>
                    <button onClick={handleCreateEvent} className="button">
                      Book
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
