import React, {Component} from "react";
import AppHeader from "../appHeader/AppHeader";
import SearchPanel from "../search-panel/SearchPanel";
import PostStatusFilter from "../postStatusFilter/PostStatusFilter";
import PostList from "../postList/PostList";
import PostAddForm from "../postAddForm/PostAddForm";

import "./app.css";

export default class App extends Component  {

	constructor(props) {
		super(props);
		this.state = {
			data: [
				{label: 'Going to learn React', important: true, id: 1},
				{label: 'Going to learn Javascript', important: false, id: 2},
				{label: 'Going to learn Redux', important: false, id: 3}
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked(this);

		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({data}) => {			
			const newArr = data.filter(elem => elem.id !== id)
			return {
				data: newArr
			}

			
		})
	}

	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++
		}

		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	onToggleImportant(id) {

	}

	onToggleLiked(id) {

	}
	
	render() {
		return (
			<div className="app">
				<AppHeader />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList 
					posts={this.state.data}
					onDelete={ this.deleteItem }
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm onAdd={this.addItem}></PostAddForm>
			</div>
		);
	}
}
