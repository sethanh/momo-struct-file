import React from 'react'
import {Modal, View, Pressable, StyleSheet, StyleProp, ViewStyle} from 'react-native'

interface ModalProps {
    visible?: boolean | false
    animationType?: 'none' | 'slide' | 'fade'
    children: JSX.Element | JSX.Element[] | null
    onCloseModal?: () => void
    containerStyle?: StyleProp<ViewStyle>
    disable?: boolean
}

const ModalLight = (props: ModalProps) => {
    const {
        visible,
        disable,
        containerStyle,
        animationType,
        children,
        onCloseModal,
    } = props

    return (
        <Modal transparent visible={visible} animationType={animationType}>
            <View style={[styles.container, containerStyle]}>
                <Pressable disabled={disable} onPress={onCloseModal} style={styles.blur}>
                <View
                    style={styles.popub}
                />
                </Pressable>

                {children}
            </View>
        </Modal>
    )
}

export default ModalLight

ModalLight.defaultProps = {
    animationType: 'fade',
    containerStyle: {},
    disable: false,
    onCloseModal: ()=>{},
    visible: false
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        justifyContent:'flex-end'
    },
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
    },
    content: {
        justifyContent: 'center',
    },
    popub:{
        flex:1,
        backgroundColor: 'black',
        opacity: 0.2
    }
})
