import { Box, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product }) => {
	return (
		<Link
			as={RouterLink}
			to={`/product/${product._id}`}
			_hover={{ textDecor: 'none' }}>
			<Box
				w={["100%", "100%", "100%", "100%"]} 
				borderRadius='lg'
				bgColor='white'
				_hover={{ shadow: 'md' }}
				mx="auto" 
			>
				<Image
					src={product.image}
					alt={product.name}
					w='full'
					h={["450px", "450px", "450px"]} 
					objectFit='cover'
					borderTopLeftRadius='lg'
					borderTopRightRadius='lg'
				/>
				<Flex py={[3, 4, 5]} px={[3, 4, 5]} direction='column' justifyContent='space-between'>
					<Heading as='h4' fontSize={['md', 'lg']} mb='3'>
						{product.name}
					</Heading>

					<Flex alignItems='center' justifyContent='space-between'>
						<Rating value={product.rating} color='yellow.500' />

						<Text fontSize={['xl', '2xl']} fontWeight='bold' color='blue.600'>
							₹{product.price}
						</Text>
					</Flex>
				</Flex>
			</Box>
		</Link>
	);
};

export default ProductCard;
