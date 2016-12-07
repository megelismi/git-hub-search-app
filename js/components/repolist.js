import React from 'react';

function RepoList(props) {
	let {data} = props;

	if (data.length === 0) {
		return <div>Loading...</div>
	} 

	data = data.map((data) => {
		return (
			<tr key={data.id}>
				<td>{data.name}</td>
				<td>{data.created_at}</td>
				<td>{data.description}</td>
				<td>{data.forks}</td>
				<td>{data.open_issues_count}</td>
				<td>{data.watchers}</td>
			   <td>{data.stargazers_count}</td>
		  </tr>
	  	)
	});

	console.log(data);

  return (
	<table>
	  <tr>
	    <th>Repo Name</th>
	    <th>Date Created</th>
	    <th>Description</th>
	    <th>Forks</th>
	    <th>Issues</th>
	    <th>Followers</th>
	    <th>Stargazers</th>
	  </tr>
	 	{data}
	</table>
  );
}

export default RepoList
