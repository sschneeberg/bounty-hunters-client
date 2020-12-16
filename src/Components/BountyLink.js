import { Link } from 'react-router-dom';

function BountyLink(props) {
    return (
        <div>
            <Link to={`/${props.bounty.id}`}>{props.bounty.name}</Link>
        </div>
    );
}

export default BountyLink;
