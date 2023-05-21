import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Divider,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import styles from "@/styles/appointment.module.css";
import CustomButton from "@/components/Button/CustomButton";
import Image from "next/image";

const Appointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // access the form values using the state variables (e.g., firstName, lastName, contactNumber, selectedDoctor, city)
  };

  return (
    <section className={styles.section}>
      <Box className={styles.container}>
        <Box className={styles.upperPart}>
          <Image
            src="/static/icons/org.png"
            alt=""
            className={styles.logo}
            width="30"
            height="30"
          />
        </Box>
        {/* <AvatarGroup size="md" max={3} className={styles.avatarGroup}>
          <Avatar
            name="User 1"
            src="/static/team/Member2.png"
            className={styles.avatar}
          />
          <Avatar
            name="User 2"
            src="/static/team/Member1.png"
            className={styles.avatar}
          />
          <Avatar
            name="User 3"
            src="/static/team/Member2.png"
            className={styles.avatar}
          />
          <Avatar name="+3" className={styles.avatar} />
        </AvatarGroup> */}
        <Divider orientation="horizontal" className={styles.divider} />
        <form onSubmit={handleSubmit}>
          <FormControl className={styles.formControl} id="firstName">
            <FormLabel className={styles.label}>First Name</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              placeholder="Enter your first name"
            />
          </FormControl>

          <FormControl className={styles.formControl} id="lastName">
            <FormLabel className={styles.label}>Last Name</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              placeholder="Enter your last name"
            />
          </FormControl>

          <FormControl className={styles.formControl} id="contactNumber">
            <FormLabel className={styles.label}>Contact Number</FormLabel>
            <Input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className={styles.input}
              placeholder="Enter your phone number (10 digits)"
            />
          </FormControl>

          <FormControl className={styles.formControl} id="doctor">
            <FormLabel className={styles.label}>Doctor</FormLabel>
            <Select
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className={styles.select}
              placeholder="Choose your doctor"
            >
              <option value="doctor1">Doctor 1</option>
              <option value="doctor2">Doctor 2</option>
            </Select>
          </FormControl>

          <FormControl className={styles.formControl} id="city">
            <FormLabel className={styles.label}>City</FormLabel>
            <Input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={styles.input}
              placeholder="Enter your city"
            />
          </FormControl>

          <CustomButton type="submit" className={styles.btn}>
            Submit
          </CustomButton>
        </form>
      </Box>
    </section>
  );
};

export default Appointment;
