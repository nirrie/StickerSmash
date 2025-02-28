import { View } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type Props = {
    imageSize: number;
    stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
    const scaleImage = useSharedValue(imageSize);
    return (
        <View style={{ top: -350 }}>
            <Image source={stickerSource} style={{ width: imageSize, height: imageSize }} />
        </View>
    );
}