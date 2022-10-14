import { HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { MdAlternateEmail } from 'react-icons/md';

const ContactDetails = (props) => {
  return (
    <VStack
      w={'fit-content'}
      alignItems={'flex-start'}
      align={'start'}
      alignSelf={'center'}
    >
      <HStack>
        <HiOutlineLocationMarker color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          268 Southwark Park Road SE16 3RN
        </Text>
      </HStack>
      <HStack>
        <BsTelephone color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          02036329739
        </Text>
      </HStack>
      <HStack>
        <MdAlternateEmail color={props.textcolor} />
        <Text
          textColor={props.textcolor}
          fontSize={{ base: 'xs', md: 'md' }}
          fontWeight={'400'}
        >
          info@lavagedryclean.co.uk
        </Text>
      </HStack>
    </VStack>
  );
};

export default ContactDetails;
