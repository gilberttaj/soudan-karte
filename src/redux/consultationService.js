import { useState } from "react";
import consultationSlice from "./consultationSlice";





//image upload
let result
const pickImage = async () => {
  // No permissions request is necessary for launching the image library
    result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });


    if (!result.cancelled) {
        return result.uri
    }
};

const consultationService = {
    pickImage,
}

export default consultationService

