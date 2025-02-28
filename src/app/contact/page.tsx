"use client";

import {
  Box,
  Button,
  Input,
  Textarea,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt, FaSms } from "react-icons/fa";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaRegQuestionCircle } from "react-icons/fa";
import { useAppRouter } from "../RouterContext";

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

  const { navigateToFaq } = useAppRouter();

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError("");
    setPhoneError("");
    setFormError("");

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address.");
    }

    if (phone && !validatePhone(phone)) {
      setPhoneError("Phone number must be 10 digits.");
    }

    if (!emailError && !phoneError) {
      const templateParams = {
        user_email: email,
        user_phone: phone,
        message: message,
      };

      emailjs
        .send(
          "service_pbo2ar9", // Service ID
          "template_whh7l9q", // Template ID
          templateParams,
          "xlOn1RAT9PBJN7u8B" // EmailJS user ID
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            alert("Your message has been sent!");
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
      <Box display="flex" justifyContent="center" mt={4}>
        <Button
          size={["sm", "xl"]}
          width={["150px", "180px"]}
          margin="10px"
          variant="surface"
          onClick={navigateToFaq}
          _hover={{
            bg: "white",
            color: "black",
            boxShadow: "0 5px 10px rgba(255, 245, 225, 0.2)",
          }}
        >
          <FaRegQuestionCircle />
          <Box>F.A.Q.</Box>
        </Button>
      </Box>
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
          {formError && (
            <Text color="red.500" textAlign="center">
              {formError}
            </Text>
          )}

          {/* Send Email Button */}
          <Box mb={4}>
            <Button colorScheme="teal" size="lg" width="100%" type="submit">
              <AiOutlineMail style={{ marginRight: "8px" }} />
              Send Email
            </Button>
          </Box>

          {/* Call Us Button */}
          <Box mb={4}>
            <Button
              colorScheme="blue"
              size="lg"
              width="100%"
              onClick={handleCallUsClick}
            >
              <FaPhoneAlt style={{ marginRight: "8px" }} />
              {showPhoneNumber ? "Hide" : "Call Us"}
            </Button>

            {showPhoneNumber && (
              <Text
                mt={2}
                fontSize="lg"
                fontWeight="bold"
                color="black"
                textAlign="center"
              >
                <Link href={`tel:${phoneNumber}`} color="blue.500">
                  📞 {phoneNumber}
                </Link>
              </Text>
            )}
          </Box>

          {/* Mobile-Only SMS Button */}
          {isMobile && (
            <Box mb={4}>
              <Link
                href={`sms:${phoneNumber}`}
                _hover={{ textDecoration: "none" }}
                width="100%"
                color="black"
              >
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
