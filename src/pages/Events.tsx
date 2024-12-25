import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Tag } from '../components/ui/tag';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import EventDialog from '../components/EventDialog';
import { EventType } from '../types';

const eventsData = [
  {
    id: "1",
    title: "Virtual Museum Tour",
    date: "2024-02-15",
    time: "1:00 PM EST",
    type: "Field Trip",
    organizer: "Art History Group",
    description: "Join us for a guided virtual tour of the Metropolitan Museum of Art."
  },
  {
    id: "2",
    title: "Science Fair",
    date: "2024-02-20",
    time: "2:00 PM EST",
    type: "Competition",
    organizer: "Science Club",
    description: "Present your science projects and learn from other students' experiments."
  },
  {
    id: "3",
    title: "Book Club Meeting",
    date: "2024-02-25",
    time: "3:00 PM EST",
    type: "Social",
    organizer: "Reading Circle",
    description: "Discussion of this month's book: 'The Giver' by Lois Lowry."
  }
]

function Events() {
  const [events, setEvents] = useState<EventType[]>(eventsData);

  const handleAddEvent = (newEvent: EventType) => {
    setEvents([...events, newEvent]);
  }

  return (
    <Container maxW="6xl" px={4}>
      <Flex justify="space-between" align="center" mb={8}>
        <Heading as="h1" size="lg" color="slate.700">Upcoming Events</Heading>
        <EventDialog addEvent={handleAddEvent} />
      </Flex>

      <Stack gap={6}>
        {events.map((event) => (
          <Box key={event.id} p={6} borderWidth="1px" borderRadius="lg" shadow="sm">
            <Flex justify="space-between" align="start">
              <Box>
                <Heading as="h2" size="md" mb={2}>{event.title}</Heading>
                <Text color="gray.600" mb={4}>{event.description}</Text>
              </Box>
              <Tag size="md" colorScheme="green" borderRadius="full">
                {event.type}
              </Tag>
            </Flex>
            <Grid templateColumns={{ md: 'repeat(3, 1fr)' }} gap={4}>
              <Text fontSize="sm" color="gray.600">
                <Text as="span" fontWeight="medium">Date:</Text> {event.date}
              </Text>
              <Text fontSize="sm" color="gray.600">
                <Text as="span" fontWeight="medium">Time:</Text> {event.time}
              </Text>
              <Text fontSize="sm" color="gray.600">
                <Text as="span" fontWeight="medium">Organizer:</Text> {event.organizer}
              </Text>
            </Grid>
            <Stack direction="row" gap={4} mt={4}>
              <Button colorScheme="blue">Join Event</Button>
              <Button variant="outline">Learn More</Button>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}

export default Events;