import React from 'react';
import Typical from 'react-typical'

const Typicals = () => {
    return (
        <Typical
        steps={['I Am', 1000, 'I Am Nazrul!', 2000, 'I Am MERN stack developer', 2000]}
        loop={Infinity}
        wrapper="p"
      />
    );
};

export default Typicals;