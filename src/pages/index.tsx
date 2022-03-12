import type { NextPage } from 'next';
import NextLink from 'next/link';

import {
  Box,
  Code,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  FaFile,
  FaFileAlt,
  FaFileCode,
  FaFolder,
  FaFolderOpen,
  FaFolderPlus,
} from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <Flex w="100%" h="100%">
      <Box
        display="flex"
        alignItems="center"
        bg="gray.800"
        rounded={10}
        p={[2, 3, 4, 5]}
        flexDirection="column"
      >
        <NextLink
          href="https://github.com/Drageast/nextjs-boilerplate"
          passHref={true}
        >
          <Link
            as={Heading}
            bgGradient="linear(to-l, rgba(65,129,173,1) 47%, rgba(221,75,75,1) 100%)"
            bgClip="text"
            fontSize={['xl', '2xl', '4xl', '6xl']}
            fontWeight="extrabold"
            p={1}
          >
            Nextjs boilerplate by Drageast
          </Link>
        </NextLink>
        <Text
          color="whiteAlpha.900"
          fontSize={['md', 'lg', 'xl', '2xl']}
          fontWeight="bold"
        >
          Using Prettier, EsLint, Chakra UI and React icons
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          m={5}
          mt={10}
          alignItems="center"
          justifyItems="center"
          fontSize={['md', 'lg', '2xl']}
          textColor="whiteAlpha.900"
        >
          <Text>Folder structure</Text>
          <SimpleGrid
            columns={[1, 2, 3]}
            spacing={[4, 6, 8, 10]}
            m={[2, 3, 4, 5]}
          >
            <Box display="flex" flexDirection="column">
              {/* src */}
              <Box display="flex" flexDirection="row" textColor="green.300">
                <Icon as={FaFolderOpen} mr={[0.5, 2]} />
                <Text>src</Text>
              </Box>
              <SimpleGrid
                columns={2}
                spacing={5}
                mt={1}
                fontSize={['sm', 'md', 'xl']}
                borderColor="green.300"
                borderWidth={1}
                p={[1, 2]}
                rounded={15}
              >
                {/* components */}
                <Box display="flex" flexDirection="row" textColor="pink.300">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>components</Text>
                </Box>
                {/* constants */}
                <Box display="flex" flexDirection="row" textColor="gray.200">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>constants</Text>
                </Box>
                {/* hooks */}
                <Box display="flex" flexDirection="row" textColor="purple.600">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>hooks</Text>
                </Box>
                {/* modules */}
                <Box display="flex" flexDirection="row" textColor="cyan.600">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>modules</Text>
                </Box>
                {/* styles */}
                <Box display="flex" flexDirection="row" textColor="blue.300">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>styles</Text>
                </Box>
                {/* types */}
                <Box display="flex" flexDirection="row" textColor="blue.700">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>types</Text>
                </Box>
                {/* lib */}
                <Box display="flex" flexDirection="row" textColor="green.700">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>lib</Text>
                </Box>
                <Box>
                  {/* pages */}
                  <Box
                    display="flex"
                    flexDirection="row"
                    textColor="orange.500"
                  >
                    <Icon as={FaFolderOpen} mr={[0.5, 2]} />
                    <Text>pages</Text>
                  </Box>
                  <SimpleGrid
                    columns={[1, 2]}
                    spacing={[2, 3, 4, 5]}
                    m={1}
                    fontSize={['xs', 'sm', 'lg']}
                    borderColor="orange.500"
                    borderWidth={1}
                    p={[1, 2]}
                    rounded={15}
                  >
                    {/* api */}
                    <Box
                      display="flex"
                      flexDirection="row"
                      textColor="yellow.400"
                    >
                      <Icon as={FaFolder} mr={[0.5, 2]} />
                      <Text>api</Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </SimpleGrid>
            </Box>
            <Box display="flex" flexDirection="column">
              {/* public */}
              <Box display="flex" flexDirection="row" textColor="blue.400">
                <Icon as={FaFolderOpen} mr={[0.5, 2]} />
                <Text>public</Text>
              </Box>
              <SimpleGrid
                columns={[1, 2]}
                spacing={[2, 3, 4, 5]}
                m={1}
                fontSize={['sm', 'md', 'xl']}
                borderColor="blue.400"
                borderWidth={1}
                p={[1, 2]}
                rounded={15}
              >
                {/* manifest */}
                <Box display="flex" flexDirection="row" textColor="gray.400">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>manifest</Text>
                </Box>
                {/* svg */}
                <Box display="flex" flexDirection="row" textColor="yellow.200">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>svg</Text>
                </Box>
                {/* images */}
                <Box display="flex" flexDirection="row" textColor="green.200">
                  <Icon as={FaFolder} mr={[0.5, 2]} />
                  <Text>images</Text>
                </Box>
              </SimpleGrid>
            </Box>
            <Box display="flex" flexDirection="column">
              {/* root */}
              <Box
                display="flex"
                flexDirection="row"
                textColor="whiteAplha.700"
              >
                <Icon as={FaFolderPlus} mr={[0.5, 2]} />
                <Text>root</Text>
              </Box>
              <SimpleGrid
                columns={[1, 2]}
                spacing={[2, 3, 4, 5]}
                m={1}
                fontSize={['sm', 'md', 'xl']}
                borderColor="whiteAplha.700"
                borderWidth={1}
                p={[1, 2]}
                rounded={15}
              >
                {/* prettierrc */}
                <Box display="flex" flexDirection="row" textColor="red.400">
                  <Icon as={FaFile} mr={[0.5, 2]} />
                  <Text>prettierrc</Text>
                </Box>
                {/* prettierignore */}
                <Box display="flex" flexDirection="row" textColor="red.500">
                  <Icon as={FaFile} mr={[0.5, 2]} />
                  <Text>prettierignore</Text>
                </Box>
                {/* eslintrc */}
                <Box display="flex" flexDirection="row" textColor="teal.400">
                  <Icon as={FaFile} mr={[0.5, 2]} />
                  <Text>eslintrc</Text>
                </Box>
                {/* eslintignore */}
                <Box display="flex" flexDirection="row" textColor="teal.500">
                  <Icon as={FaFile} mr={[0.5, 2]} />
                  <Text>eslintignore</Text>
                </Box>
                {/* tsconfig */}
                <Box display="flex" flexDirection="row" textColor="blue.400">
                  <Icon as={FaFileCode} mr={[0.5, 2]} />
                  <Text>tsconfig</Text>
                </Box>
                {/* gitignore */}
                <Box display="flex" flexDirection="row" textColor="orange.400">
                  <Icon as={FaFileAlt} mr={[0.5, 2]} />
                  <Text>gitignore</Text>
                </Box>
              </SimpleGrid>
            </Box>
          </SimpleGrid>
        </Box>
        <Text
          fontSize={['sm', 'md', 'xl']}
          textColor="whiteAlpha.900"
          fontWeight="bold"
        >
          Installation:
        </Text>
        <Code rounded={15} fontSize={['sm', 'md']}>
          npx create-next-app --example
          https://github.com/Drageast/nextjs-boilerplate
        </Code>
      </Box>
    </Flex>
  );
};

export default Home;
