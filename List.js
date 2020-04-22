import React from 'react';
import { View, Text, FlatList } from 'react-native';

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			mahasiswa: [
			{
				ID: 1
				Nama : 'Injilio';
				Fakultas: 'Computer Science'
			},
			{
				ID: 2
				Nama : 'Nadia';
				Fakultas: 'Economy'
			},
			{
				ID: 3
				Nama : 'Syalom';
				Fakultas: 'Nurse'
			},
			{
				ID: 4
				Nama : 'Mitchella';
				Fakultas: 'Computer Science'
			},							
		],
		refreshing: false
	 }

	}

	renderItem = ({item}) => (
		<View style={{ padding : 20, borderBottomWidth: 1, borderBottomColor : 'red'}}
			<Text>Nama: {item.Nama}</Text>
			<Text>Fakultas: {item.Fakultas}</Text>
		</View>
	)

	onRefresh = () => {
		this.setState({ refreshing: true })
		const data = this.state.mahasiswa.concat({ID: 5, Nama : 'Anggun', Fakultas : 'Ekonomi'})
		this.setState({
			refreshing: true,
			mahasiswa:data,
		})
	}

	render () {

		return (
			<View>
			    <FlatList
			    data={this.state.mahasiswa}
			    keyExtractor={item => item.id.toString()}
			    renderItem={this.renderItem}
			    refreshing={this.state.refreshing}
			    onRefresh={this.onRefresh}
			    />
			</View>

		)
	}
}

export default List;