import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import { connect } from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";



type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}

type ParamsType = {
    userId: string
}

export type ProfilePagePropsType = MapStatePropsType & MapDispatchPropsType
export type PropsType = RouteComponentProps<ParamsType> & ProfilePagePropsType

export class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId='2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }


    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(ProfileContainerWithUrl)

