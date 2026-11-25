import { documents } from "@/constants/documents";
import { View } from "react-native";
import DocumentCard from "./document-card";

export default function CardStack(){
    return (
        <View>
            {documents.map((document,index)=> 
            <View style={{marginTop: index === 0 ? 0:-107}} key={document.id}>
                <DocumentCard {...document}  />
            </View>
            
        )}
        </View>
    )
}