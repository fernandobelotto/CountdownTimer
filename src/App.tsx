import { Box, Center, Divider, SimpleGrid, Stack, Title } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useEffect, useState } from "react";

export default function App() {
  const [targetDate, settargetDate] = useState("");

  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const ref = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(ref);
  }, [countDownDate]);

  const fullDate = {
    days: Math.floor(countDown / (1000 * 60 * 60 * 24)),
    hours: Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((countDown % (1000 * 60)) / 1000),
  };

  return (
    <>
      <Center style={{ height: "100vh", width: "100%", alignItems: "center" }}>
        <Stack>
          <Title order={1}>Countdown Timer</Title>
          <DatePicker
            placeholder="Pick date"
            label="Event date"
            onChange={(e: any) => settargetDate(e)}
          />
          <SimpleGrid cols={4}>
            <Box>
              <Title order={1}>{fullDate.days}</Title>
              <Divider my="sm" />
              <Title order={3}>Days</Title>
            </Box>
            <Box>
              <Title order={1}>{fullDate.hours}</Title>
              <Divider my="sm" />
              <Title order={3}>Hours</Title>
            </Box>
            <Box>
              <Title order={1}>{fullDate.minutes}</Title>
              <Divider my="sm" />
              <Title order={3}>Minutes</Title>
            </Box>
            <Box>
              <Title order={1}>{fullDate.seconds}</Title>
              <Divider my="sm" />
              <Title order={3}>Seconds</Title>
            </Box>
          </SimpleGrid>
        </Stack>
      </Center>
    </>
  );
}
