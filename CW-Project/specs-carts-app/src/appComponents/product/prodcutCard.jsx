import { Badge, Box, Button, HStack, Icon, Image, Spacer, Text, VStack } from "@chakra-ui/react"
import { HiStar } from "react-icons/hi"

const ProductCard = ({url, title, price, reviewCount, rating , onAddToCart}) => {
  return (
    <div>
        <Box maxW="lg" borderWidth="1px" className="product-card" padding={"20px"}>
        <Image src={url} alt="" />

        <Box p="4" spaceY="2">
            <HStack>
            <Badge colorPalette="teal" variant="solid">
                Superhost
            </Badge>
            <HStack gap="1" fontWeight="medium">
                <Icon color="orange.400">
                <HiStar />
                </Icon>
                <Text>
                {rating} ({reviewCount})
                </Text>
            </HStack>
            </HStack>
            <Text fontWeight="medium" color="fg">
            {title}
            </Text>
            <HStack color="fg.muted" >
            {price} 
            <Spacer/>
            <Button  padding={"10px 20px"} borderRadius={"10px"} colorPalette={"teal"} color="white" onClick={onAddToCart}>Add to Cart</Button>
            </HStack>
        </Box>
        </Box>
    </div>
  )
}

export default ProductCard