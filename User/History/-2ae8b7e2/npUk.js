import {
	Flex,
	Heading,
	MapView,
	View,
	Text,
	Image,
} from '@aws-amplify/ui-react'
import { useState } from 'react'
import { Marker, Popup } from 'react-map-gl'

function App() {
	return (
		<View>
			<Flex direction={'column'} alignItems={'center'}>
				<Heading level={3}>Amplify Seattle Visit</Heading>
				<MapView
					initialViewState={{
						longitude: -122.3381659,
						latitude: 47.615686,
						zoom: 12,
					}}
					style={{ width: '600px', height: '600px' }}
				>
					{locationData.map((loc) => (
						<MarkerWithPopup
							key={loc.id}
							latitude={loc.latitude}
							longitude={loc.longitude}
							title={loc.title}
							description={loc.description}
							image={loc.image}
						/>
					))}
				</MapView>
			</Flex>
		</View>
	)
}

export default App