import React, {useCallback} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as profileSelectors from "../../store/profile/profile.selectors";
import {toggleShowName} from "../../store/profile/profile.actions";

const Profile = () => {
    const dispatch = useDispatch()
    const show = useSelector(profileSelectors.showName)
    const name = useSelector(profileSelectors.name)

    const onChange = useCallback(()=>{
        dispatch(toggleShowName)
    }, [dispatch])

    return (
        <div>
            This is profile
            <p>
                {show && name}
            </p>
            <input type="checkbox" onChange={onChange} checked={show}/>
        </div>
    );
};

export default Profile;
