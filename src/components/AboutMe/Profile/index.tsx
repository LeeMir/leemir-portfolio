import React from 'react';
import { Wrapper } from './style';

import ProfileImg from '../../../assets/images/profile.jpeg';

const Profile = () => {
  return (
    <Wrapper>
      <img src={ProfileImg} alt='profile' />
    </Wrapper>
  )
};

export default Profile;
