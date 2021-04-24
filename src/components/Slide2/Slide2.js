import React, { Component } from 'react';
import Swipe from './Swipe';

export default class Slide2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classes: 'slide2'
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({ classes: 'slide2 slide2-show' });
		}, 1000);
	}

	componentWillReceiveProps({ activeIndex, index }) {
		if (activeIndex === index) {
			this.setState({ classes: 'slide2 slide2-show' });
		} else {
			this.setState({ classes: 'slide2' });
		}
	}

	shouldComponentUpdate({ activeIndex }, { classes }) {
		if (activeIndex !== this.props.activeIndex) return true;
		else if (classes !== this.state.classes) return true;
		return false;
	}

	render() {
		let indexTracker = -1;
		return (
			<div
				className={this.state.classes}
				style={{
					background: this.props.color
				}}>
				<div>
					<h1>
						{
							'Hey Alekhya'.split('').map((letter, i) => {
								indexTracker++
								if (letter === ' ') {
									return (
										<div key={i}><h1>&nbsp;</h1></div>
									);
								} else {
									return (
										<div key={i}>
											<h1
												style={{
													transitionDelay: `${indexTracker / 10}s`
												}}>{letter}</h1>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${(indexTracker / 10)}s, opacity 0.2s ${0.2 + (indexTracker / 10)}s`,
													background: '#A2A8F8'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.05 + (indexTracker / 10)}s, opacity 0.2s ${0.25 + (indexTracker / 10)}s`,
													background: '#47FEA0'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.1 + (indexTracker / 10)}s, opacity 0.2s ${0.3 + (indexTracker / 10)}s`,
													background: '#F6FE55'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.15 + (indexTracker / 10)}s, opacity 0.2s ${0.35 + (indexTracker / 10)}s`,
													background: '#4C4CF8'
												}}></div>
										</div>
									);
								}
							})
						}
					</h1>
					<h1>
						{
							'& Collin!'.split('').map((letter, i) => {
								indexTracker++;
								if (letter === ' ') {
									return (
										<div key={i}><h1>&nbsp;</h1></div>
									);
								} else {
									return (
										<div key={i}>
											<h1
												style={{
													transitionDelay: `${indexTracker / 10}s`
												}}>{letter}</h1>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${(indexTracker / 10)}s, opacity 0.2s ${0.2 + (indexTracker / 10)}s`,
													background: '#A2A8F8'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.05 + (indexTracker / 10)}s, opacity 0.2s ${0.25 + (indexTracker / 10)}s`,
													background: '#47FEA0'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.1 + (indexTracker / 10)}s, opacity 0.2s ${0.3 + (indexTracker / 10)}s`,
													background: '#F6FE55'
												}}></div>
											<div
												className='fetti'
												style={{
													transition: `transform 0.3s ${0.15 + (indexTracker / 10)}s, opacity 0.2s ${0.35 + (indexTracker / 10)}s`,
													background: '#4C4CF8'
												}}></div>
										</div>
									);
								}
							})
						}
					</h1>
					<Swipe />
				</div>
			</div>
		);
	}
}
