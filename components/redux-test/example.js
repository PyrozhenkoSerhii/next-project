import {connect} from 'react-redux'
import Clock from './clock'

function Examples ({ lastUpdate, light }) {
    return (
        <div>
            <Clock lastUpdate={lastUpdate} light={light} />
        </div>
    )
}

function mapStateToProps (state) {
    const { lastUpdate, light } = state.clock;
    return { lastUpdate, light }
}

export default connect(mapStateToProps)(Examples)