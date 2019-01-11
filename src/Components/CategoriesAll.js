import React, { Fragment } from "react";
import { Grid, Image } from "semantic-ui-react";

class CategoriesAll extends React.Component {
	render() {
		return (
			<div className="categoriesAll">
				<Grid>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
					</Grid.Row>
					<Grid.Row columns={3}>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
						<Grid.Column>
							<Image
								src="https://react.semantic-ui.com/images/wireframe/image.png"
								size="large"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}

export default CategoriesAll;
