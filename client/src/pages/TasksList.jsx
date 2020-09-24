import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

// import 'react-table/react-table.css'

const Wrapper = styled.div`
 	padding: 0 40px 40px 40px;
`

class TasksList extends Component
{
	constructor(props)
	{
		super(props)
		this.state = {
			tasks: [],
			columns: [],
			isLoading: false,
		}
	}

	componentDidMount = async () => {
		this.setState({ isLoading : true })

		await api.getAllTasks().then(tasks => {
			this.setState({
				tasks : tasks.data,
				isLoading : false,
			})
		})
	}

	render()
	{
		const { tasks, isLoading } = this.state
		console.log('TCL: TasksList -> render -> tasks', tasks)

		const columns = [
			{
				Header: 'ID',
				accessor: '_id',
				filterable: true,
			},
			{
				Header: 'Name',
				acessor: 'name',
				filterable: true,
			},
		]

		let showTable = true

		if (tasks.length === 0)
		// if (!tasks.data)
		{
			showTable = false
		}
		// console.log(tasks.data)

    return (
      <Wrapper>
          <p>{tasks.data && tasks.data[0].name}</p>
      </Wrapper>
    )

		// return (
		// 	<Wrapper>
		// 		{showTable && (
		// 			<ReactTable
		// 				data={tasks.data}
		// 				columns={columns}
		// 				loading={isLoading}
		// 				defaultPageSize={10}
		// 				showPageSizeOptions={true}
		// 				minRows={0}
		// 			/>
		// 		)}
		// 	</Wrapper>
		// )
	}
}

export default TasksList
