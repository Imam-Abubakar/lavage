import { ButtonGroup, IconButton } from '@chakra-ui/react';
import * as React from 'react';
import { GrInstagram } from 'react-icons/gr';
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';

export const SocialMediaLinks = (props) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='https://instagram.com/lavage_uk'
      aria-label='Instagram'
      _active={{
        bgColor: 'gray',
      }}
      _hover={{
        bgColor: 'gray',
      }}
      icon={<GrInstagram fontSize='24px' color='white' />}
    />
    <IconButton
      as='a'
      href='https://web.facebook.com/lavage.dc'
      aria-label='Facebook'
      _active={{
        bgColor: 'gray',
      }}
      _hover={{
        bgColor: 'gray',
      }}
      icon={<FiFacebook fontSize='26px' color='white' />}
    />
    <IconButton
      as='a'
      href='https://www.twitter.com/LavageUK'
      aria-label='Twitter'
      _active={{
        bgColor: 'gray',
      }}
      _hover={{
        bgColor: 'gray',
      }}
      icon={<FiTwitter fontSize='26px' color='white' />}
    />
  </ButtonGroup>
);
