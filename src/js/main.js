
class HomePage extends React.Component {

	constructor() {
		super();

		this.state = {
			messsages: []
		};
	}

	componentDidMount() {

		$.get('/messages', function(messages) {

			this.setState({
				messages: messages
			});
		}.bind(this));
	}

	render() {
		var list = [];

		for (var index in this.state.messages) {
			var msg = this.state.messages[index];

			list.push(
				<div className='ui segment'>
					<div className='ui red ribbon label'>{msg.name}</div>
					<div>{msg.msg}</div>
				</div>
			);
		}

		return (
			<div className='ui padded basic segment'>
				<h1 className='ui center aligned icon header'>
					<i className='comment icon' />
					<div className='content'>GuestBook</div>
					<div className='sub header'>Leave message whatever you want</div>
				</h1>
				<div className='ui olive item menu'>
					<a href='/post' className='item'>
						<i className='mail icon' />
						<span>Leave Message</span>
					</a>
				</div>
				{list}
			</div>
		);
	}
}

ReactDOM.render(
	<HomePage />,
	document.getElementById('app')
);
