import { Container, HStack, Separator, Stack, Text } from "@chakra-ui/react"

function ImageHeading({heading,marginTop}){
    return(
        <>
            <Stack>
                <HStack className="image-heading" gap="4" marginBottom={"2rem"} marginTop={marginTop}>
                    <Separator />
                    <Text className="heading" flexShrink="0">{heading}</Text>
                    <Separator />
                </HStack>
            </Stack>
        </>
    )
}

export default ImageHeading