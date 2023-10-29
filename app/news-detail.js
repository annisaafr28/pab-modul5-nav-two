import { Heading, Text, Center, Box, Image, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const { width, height } = useWindowDimensions();

  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <Image
            source={{ uri: params.image }}
            resizeMode="contain"
            alt="Image Data"
            style={{ width: width, height: height * 0.3245 }}
        />      
        <Box p={"$4"} bg="$coolGray200" >
            <Text fontSize={"$sm"} mb={"$4"}>{params.date}</Text>
            <Heading 
              lineHeight={30} 
              fontSize={28} 
              mb={"$5"}
              >
                {params.title}
              </Heading>
              <Box borderTopColor={"$coolGray300"} borderTopWidth={1}>
                <Text fontSize={"$md"} mt={"$5"}>{params.content}</Text>
              </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
