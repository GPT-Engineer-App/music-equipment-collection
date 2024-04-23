import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Stack, Text, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState("");
  const toast = useToast();

  const handleAddEquipment = () => {
    if (newEquipment === "") {
      toast({
        title: "Error",
        description: "Equipment name can't be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setEquipments([...equipments, newEquipment]);
    setNewEquipment("");
    toast({
      title: "Added",
      description: "Equipment added successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteEquipment = (index) => {
    const updatedEquipments = equipments.filter((_, i) => i !== index);
    setEquipments(updatedEquipments);
    toast({
      title: "Deleted",
      description: "Equipment removed successfully",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={5}>
      <Heading mb={6}>Music Equipment Collection</Heading>
      <Stack spacing={4}>
        <Input placeholder="Add new equipment" value={newEquipment} onChange={(e) => setNewEquipment(e.target.value)} />
        <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={handleAddEquipment}>
          Add Equipment
        </Button>
        <List spacing={3}>
          {equipments.map((equipment, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Text fontSize="lg">{equipment}</Text>
              <Button leftIcon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteEquipment(index)}>
                Delete
              </Button>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export default Index;
