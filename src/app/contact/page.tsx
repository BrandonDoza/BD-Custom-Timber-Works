"use client";

import { Box, Button, Input, Textarea, Stack, Text, Link } from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaSms } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [formError, setFormError] = useState("");

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const phoneNumber = "+19703892278"; 

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Phone validation function
  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // Submit handler function
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Clear previous error messages
    setEmailError("");
    setPhoneError("");
    setFormError("");

    // Validate email
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }

    // Validate phone number if provided
    if (phone && !validatePhone(phone)) {
      setPhoneError("Phone number must be 10 digits.");
    }

    // If no errors, simulate form submission
    if (!emailError && !phoneError) {
      // Send email using EmailJS
      const templateParams = {
        user_email: email,
        user_phone: phone,
        message: message,
      };

      emailjs
        .send(
          "service_pbo2ar9",     // Service ID
          "template_whh7l9q",    // Template ID
          templateParams,        // Template params (form data)
          "xlOn1RAT9PBJN7u8B"     // Your EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            alert("Your message has been sent!");
            // Reset form
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (err) => {
            console.log("Failed to send email:", err);
            setFormError("Failed to send the email. Please try again later.");
          }
        );
    } else {
      setFormError("Please fix the errors above before submitting.");
    }
  };

  const handleCallUsClick = () => {
    setShowPhoneNumber((prev) => !prev);
  };

  return (
    <Box
      width={["90%", "80%", "60%"]}
      margin="auto"
      padding={["20px", "30px"]}
      bg="gray.100"
      borderRadius="md"
      boxShadow="lg"
      mt="20px"
      style={{ flexGrow: 1 }}
      marginBottom="15px"
    >
      <Text fontSize="2xl" mb={4} textAlign="center" color="black">
        Contact Us
      </Text>

      <form onSubmit={handleSubmit}>
        <Stack align="stretch">
          {/* Email Input */}
          <Box mb={4}>
            <Input
              placeholder="Your Email"
              type="email"
              size="lg"
              variant="flushed"
              color="black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <Text color="red.500">{emailError}</Text>}
          </Box>

          {/* Message Textarea */}
          <Box mb={4}>
            <Textarea
              placeholder="Your Message - Tell Us What You're Looking For"
              size="lg"
              variant="flushed"
              rows={6}
              color="black"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Box>

          {/* Phone Input */}
          <Box mb={4}>
            <Input
              placeholder="Your Phone Number (optional)"
              size="lg"
              variant="flushed"
              color="black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {phoneError && <Text color="red.500">{phoneError}</Text>}
          </Box>

          {/* Form error */}
          {formError && <Text color="red.500" textAlign="center">{formError}</Text>}

          {/* Send Email Button */}
          <Box mb={4}>
            <Button colorScheme="teal" size="lg" width="100%" type="submit">
              <AiOutlineMail style={{ marginRight: "8px" }} />
              Send Email
            </Button>
          </Box>

          {/* Call Us Button */}
          <Box mb={4}>
            <Button colorScheme="blue" size="lg" width="100%" onClick={handleCallUsClick}>
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              {showPhoneNumber ? "Hide" : "Call Us"}
            </Button>

            {showPhoneNumber && (
              <Text mt={2} fontSize="lg" fontWeight="bold" color="black" textAlign="center">
                <Link href={`tel:${phoneNumber}`} color="blue.500">
                  📞 {phoneNumber}
                </Link>
              </Text>
            )}
          </Box>

          {/* Mobile-Only SMS Button */}
          {isMobile && (
            <Box mb={4}>
              <Link href={`sms:${phoneNumber}`} _hover={{ textDecoration: "none" }} width="100%" color="black">
                <Button colorScheme="green" size="lg" width="100%">
                  <FaSms style={{ marginRight: "8px" }} />
                  Send Text
                </Button>
              </Link>
            </Box>
          )}
        </Stack>
      </form>
    </Box>
  );
}
