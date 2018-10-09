import React from 'react';

const Post = ({match}) => {
    console.log('match: ',match)
    return (
        <p>
            포스트 #{match.params.id}
        </p>
    );
};

export default Post;