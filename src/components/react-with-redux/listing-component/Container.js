import { connect } from 'react-redux';
import {ListingComponent} from './Component';
import { apiFetch} from './actions';


const mapStateToProps = state => {
    const { randomUsers, error } = state.ListingReducer;

    return {
        randomUsers, error
    }

}

const mapDispatchToProps = dispatch => {

    return {
        apiFetch: (numberOfUsers) => dispatch(apiFetch(numberOfUsers)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListingComponent);
