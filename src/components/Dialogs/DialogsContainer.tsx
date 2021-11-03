import {
    sendNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/reduxStore";
import {MessagesPagePropsType} from "../../App";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: MessagesPagePropsType
}

type MapDispatchPropsType = {
    updateNewMessageText: (message: string) => void
    sendNewMessage: () => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageText: (message: string) => {
            dispatch(updateNewMessageTextActionCreator(message))
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)