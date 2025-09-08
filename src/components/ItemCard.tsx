// import { Card, Group, Badge, ActionIcon, Text } from "@mantine/core";
// import { IconTrash } from "@tabler/icons-react";

// type FoodProps = {
//   name: string;
//   price: number | string;
//   quantity: number | string;
//   category: string;
//   onDelete: () => void;
// };

// export default function ItemCard() {
//   // หากต้องการเปลี่ยนแปลง type ชนิด string เป็น number สามารถใช้วิธีการดังโค้ดตัวอย่างด้านล่างนี้ได้
//   let val_number: number = Number("500.0");
//   console.log(val_number + 100); // 600.0

//   return (
//     <Stack w="100%">
//         {items.map((task) => (
//           <Group justify="space-between" align="flex-start">
//             <Stack>
//               <Text>{task.name}</Text>

//               <Text size="sm" c="dimmed">
//                 {task.price} + Bath x {task.quantity} = {Number(task.price) * Number(task.quantity)} Bath
//               </Text>

//               <ActionIcon
//                     variant="filled"
//                     color="red"
//                     aria-label="Settings"
//                     onClick={() => deleteTask(task.id)}
//                   >
//                     <IconTrash stroke={1.5} />
//                   </ActionIcon>

//             </Stack>
//           </Group>
//         ))}
//       </Stack>

//   );
// }
