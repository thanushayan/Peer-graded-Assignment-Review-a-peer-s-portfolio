import React from "react";
import { Box, Heading, Image, Text, Link } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box textAlign="left" bg="white" p={4} boxShadow="base" borderRadius="md">
      <Image src={imageSrc} alt={title} />
      <Box mt={4}>
        <Heading as="h4" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" mt={2}>
          {description}
        </Text>
        <Link color="blue.500" fontSize="sm" mt={2} display="inline-block">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </Link>
      </Box>
    </Box>
  );
};

export default Card;
