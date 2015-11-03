
class HomePage extends React.Component {
	render() {
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
			</div>
		);
	}
}

ReactDOM.render(
	<HomePage />,
	document.getElementById('app')
);
