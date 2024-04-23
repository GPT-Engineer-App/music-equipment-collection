import React, { useState } from "react";
import { Box, Button, Container, Heading, Input, List, ListItem, Stack, Text, useToast, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";

const Index = () => {
  const [equipments, setEquipments] = useState([]);
  const [newEquipment, setNewEquipment] = useState("");
  const [newEquipmentImage, setNewEquipmentImage] = useState("");
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
    setEquipments([...equipments, { name: newEquipment, image: newEquipmentImage }]);
    setNewEquipment("");
    setNewEquipmentImage("");
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
    <Container maxW="container.md" py={5} bg="brand.900">
      <Heading mb={6} color="white">
        Music Equipment Collection
      </Heading>
      <Stack spacing={4}>
        <Stack direction="row" spacing={2}>
          <Input placeholder="Add new equipment" value={newEquipment} onChange={(e) => setNewEquipment(e.target.value)} borderColor="gray.600" color="white" />
          <Input placeholder="Add image URL" value={newEquipmentImage} onChange={(e) => setNewEquipmentImage(e.target.value)} borderColor="gray.600" color="white" />
        </Stack>
        <Button leftIcon={<FaPlus />} colorScheme="teal" variant="solid" onClick={handleAddEquipment}>
          Add Equipment
        </Button>
        <List spacing={3}>
          {equipments.map((equipment, index) => (
            <ListItem key={index} d="flex" justifyContent="space-between" alignItems="center">
              <Stack direction="row" align="center" spacing={4}>
                {equipment.image && <Image src={equipment.image} boxSize="50px" objectFit="cover" />}
                <Text fontSize="lg" color="gray.300">
                  {equipment.name}
                </Text>
              </Stack>
              <Button leftIcon={<FaTrash />} colorScheme="purple" onClick={() => handleDeleteEquipment(index)}>
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
