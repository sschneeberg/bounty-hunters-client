import { Link } from 'react-router-dom';

function BountyLink(props) {
    console.log(props);
    const path = `show/${props.bounty._id}`;
    return (
        <div>
            <Link to={{ pathname: path, state: { bounty: props.bounty } }}>
                {props.bounty.name}
            </Link>
        </div>
    );
}

export default BountyLink;
