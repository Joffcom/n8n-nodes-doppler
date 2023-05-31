import { INodeProperties } from 'n8n-workflow';

export const shareOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,

		displayOptions: {
			show: {
				resource: ['share'],
			},
		},
		options: [
			{
				name: 'Plain Text',
				value: 'plainText',
				action: 'Create a site in your plausible account',
				description: 'Creates a site in your Plausible account',
				routing: {
					request: {
						method: 'POST',
						url: '/share/secrets/plain',
					},
				},
			},
		],
		default: 'plainText',
	},
];

export const shareFields: INodeProperties[] = [
	{
		displayName: 'Secret',
		name: 'secret',
		type: 'string',
		default: 'Don\'t tell anyone',
		description: 'The secret you want to share',
		displayOptions: {
			show: {
				resource: ['share'],
				operation: ['plainText'],
			},
		},
		routing: {
			send: {
				type: 'body',
				property: 'secret',
			},
		},
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		displayOptions: {
			show: {
				resource: [
					'share',
				],
				operation: [
					'plainText',
				],
			},
		},
		options: [
			{
				displayName: 'Expire After Days',
				name: 'expireAfterDays',
				type: 'number',
				default: 1,
				description: 'Number of days before the link expires. Valid range: 1 to 90.',
				routing: {
					send: {
						type: 'body',
						property: 'expire_days',
					},
				},
			},
			{
				displayName: 'Expire After Views',
				name: 'expireAfterViews',
				type: 'number',
				default: 1,
				description: 'Number of views before the link expires. Valid ranges: 1 to 50. -1 for unlimited.',
				routing: {
					send: {
						type: 'body',
						property: 'expire_views',
					},
				},
			},
		],
	},
];
