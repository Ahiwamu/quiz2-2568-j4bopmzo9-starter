import {
  // Button,
  Stack,
  Title,
  Divider,
  Container,
  Text,
  // Card,
  // Group,
  // ActionIcon,
} from "@mantine/core";
//import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
// import AddTaskModal from "../components/Modal";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [items, setItems] = useState<FoodItem[]>([]);

  // const [opened, setOpened] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("my-items");
    if (stored) {
      const parsed = JSON.parse(stored);
      setItems(parsed);
    }
    setItems(items);
  }, []);

  useEffect(() => {
    localStorage.setItem("my-items", JSON.stringify(items));
  }, [items]);

  // const deleteTask = (taskId: string) => {
  //   setItems((prev) => prev.filter((t) => t.id !== taskId));
  // };

  const categories = ["Main Course", "Drink", "Dessert"];
  let sum = 0;
  items.map((e) => {sum += Number(e.price)})
  let sumMain = 0;
  items.map((e) => {if(e.category === categories[0]) sumMain += Number(e.price)});
  let sumdrink = 0;
  items.map((e) => {if(e.category === categories[0]) sumMain += Number(e.price)});
  let sumdress = 0;
  
  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      {/* <Button onClick={() => setOpened(true)}>Add Food Item</Button> */}
      {/* <AddTaskModal
        opened={opened}
        onClose={() => setOpened(false)}
      /> */}
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total: {sum} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>
      <Text>
      Main Course: {sumMain} Bath
      </Text>
      <Text>
      Drink: {sumdrink} Bath
      </Text>
      <Text>
      Dessert: {sumdress} Bath
      </Text>
      <Divider my="md" />
      {/* Type additional card here. */}

      
    </Container>
  );
}
