package com.example.ticketing.controller;

import com.example.ticketing.model.Event;
import com.example.ticketing.repository.EventRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    private final EventRepository eventRepository;

    public EventController(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    // This endpoint is public (configured in SecurityConfig)
    @GetMapping
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    // This endpoint is protected and requires ADMIN role
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Event createEvent(@RequestBody Event event) {
        // In a real app, you'd use DTOs and set defaults
        event.setAvailableTickets(event.getTotalTickets());
        return eventRepository.save(event);
    }

    // Example: Create a test event on startup (just for demo)
    @PostMapping("/init")
    @PreAuthorize("hasRole('ADMIN')")
    public Event createTestEvent() {
        Event event = new Event();
        event.setName("Spring Developer Conference");
        event.setDescription("A test event for devs.");
        event.setEventDate(LocalDateTime.now().plusDays(30));
        event.setTotalTickets(500);
        event.setAvailableTickets(500);
        return eventRepository.save(event);
    }
}