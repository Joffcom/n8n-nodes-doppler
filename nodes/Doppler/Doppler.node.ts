import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { shareFields, shareOperations } from './descriptions';

export class Doppler implements INodeType {
	description : INodeTypeDescription = {
		displayName: 'Doppler',
		name: 'Doppler',
		icon: 'file:doppler.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Doppler API',
		defaults: {
			name: 'Doppler',
		},
		inputs: ['main'],
		outputs: ['main'],
		requestDefaults: {
			baseURL: 'https://api.doppler.com/v1',
			headers: {},
		},
		properties : [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Share',
						value: 'share',
					},
				],
				default: 'share',
			},

			...shareOperations,
			...shareFields,
		],
	};
}
