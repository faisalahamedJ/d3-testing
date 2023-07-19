export const PRIMARY_DATA = {
  nodes: [
    {
      id: 1,
      type: "parent",
      data: {
        updated_time: 1680894387,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "accuknox-agents",
        labels: "app=feeder-service",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "",
        port: 0,
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
    {
      id: 2,
      type: "child",
      data: {
        updated_time: 1680894387,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "3.137.50.231",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
      children: [
        { name: "Axes", size: 1302 },
        { name: "Axis", size: 24593 },
        { name: "AxisGridLine", size: 652 },
        { name: "AxisLabel", size: 636 },
        { name: "CartesianAxes", size: 6703 },
      ],
    },
    {
      id: 3,
      type: "child",
      data: {
        updated_time: 1681282440,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "3.128.84.223",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
    {
      id: 4,
      type: "child",
      data: {
        updated_time: 1681006527,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "18.190.29.11",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
    {
      id: 5,
      type: "child",
      data: {
        updated_time: 1681296426,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "3.136.119.147",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
    {
      id: 6,
      type: "child",
      data: {
        updated_time: 1681296729,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "3.12.169.97",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
    {
      id: 7,
      type: "child",
      data: {
        updated_time: 1681296529,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "accuknox-agents",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "svc/discovery-engine",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },

    {
      id: 8,
      type: "child",
      data: {
        updated_time: 1681296529,
        cluster_name: "accuknox-e2e",
        pod_name: "feeder-service-665c449dcf-7qbfr",
        namespace: "accuknox-agents",
        container_name: "",
        source: "/home/feederservice/bin/feeder-service",
        ip: "svc/discovery-engine/test",
        port: 0,
        nw_type: "egress",
        action: "",
        allowed_connections: 6,
        blocked_connections: 0,
      },
      show: true,
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: 1,
      target: 2,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "3.137.50.231",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1680894387,
      },
    },
    {
      id: "e1-3",
      source: 1,
      target: 3,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "3.128.84.223",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681282440,
      },
    },
    {
      id: "e1-4",
      source: 1,
      target: 4,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "18.190.29.11",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681006527,
      },
    },
    {
      id: "e1-5",
      source: 1,
      target: 5,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "3.136.119.147",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296426,
      },
    },
    {
      id: "e1-6",
      source: 1,
      target: 6,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "3.12.169.97",
        protocol: "TCP",
        port: 3000,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296729,
      },
    },
    {
      id: "e1-7",
      source: 1,
      target: 7,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "svc/discovery-engine",
        protocol: "TCP",
        port: 9089,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296529,
      },
    },
    {
      id: "e7-1",
      source: 7,
      target: 1,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "svc/discovery-engine",
        protocol: "TCP",
        port: 9089,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296529,
      },
    },
    {
      id: "e1-8",
      source: 1,
      target: 6,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "svc/discovery-engine",
        protocol: "TCP",
        port: 9089,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296529,
      },
    },
    {
      id: "e1-9",
      source: 1,
      target: 6,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "svc/discovery-engine",
        protocol: "TCP",
        port: 9089,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296529,
      },
    },
    {
      id: "e1-10",
      source: 6,
      target: 8,
      label: "TCP-egress",
      show: true,
      data: {
        cluster_name: "",
        ip: "svc/discovery-engine",
        protocol: "TCP",
        port: 9089,
        namespace: "",
        destination: "",
        destination_label: "",
        destination_namespace: "",
        action: "",
        updated_time: 1681296529,
      },
    },
  ],
};

export const DATASET_2 = {
  nodes: [
    {
      id: 1,
      type: "parent",
      data: {
        name: "parent",
      },
    },
    {
      id: 2,
      type: "child",
      data: {
        name: "child-1",
        children: [
          {
            name: "child-1-1",
          },
          {
            name: "child-1-2",
          },
          {
            name: "child-1-3",
          },
        ],
      },
      edges: [
        { source: "child-1-1", target: "child-1-2" },
        { source: "child-1-1", target: "child-1-3" },
      ],
    },
    {
      id: 3,
      type: "child",
      data: {
        name: "child-2",
        children: [
          {
            name: "child-2-1",
          },
          {
            name: "child-2-2",
          },
          {
            name: "child-2-3",
          },
          {
            name: "child-2-4",
          },
          {
            name: "child-2-5",
          },
          {
            name: "child-2-6",
          },
        ],
      },
      edges: [
        {
          source: "child-2-1",
          target: "child-2-2",
        },

        {
          source: "child-2-3",
          target: "child-2-5",
        },
        {
          source: "child-2-5",
          target: "child-2-6",
        },
      ],
    },
    {
      id: 4,
      type: "child",
      data: {
        name: "child-3",
        children: [
          {
            name: "child-3-1",
          },
          {
            name: "child-3-2",
          },
          {
            name: "child-3-3",
          },
        ],
      },
      show: true,
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: 1,
      target: 2,
      show: true,
    },
    // {
    //   id: "e1-3",
    //   source: 2,
    //   target: 1,
    //   show: true,
    // },
    {
      id: "e1-2",
      source: 1,
      target: 3,
      show: true,
    },
    {
      id: "e1-2",
      source: 1,
      target: 4,
      show: true,
    },
    // {
    //   id: "e1-2",
    //   source: 4,
    //   target: 1,
    //   show: true,
    // },
  ],
};

export const DATASET_PACK = {
  name: "Root",
  children: [
    {
      name: "Category 1",
      value: 20,
    },
    {
      name: "Category 2",
      value: 15,
    },
    {
      name: "Category 3",
      value: 10,
    },
    {
      name: "Category 4",
      value: 5,
    },
  ],
};

export const DATASET_PACK_2 = {
  name: "A1",
  children: [
    {
      name: "C1",
      value: 100,
    },
    {
      name: "C2",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
    {
      name: "C3",
      value: 100,
    },
  ],
};

export const DATASET_PACK_3 = {
  name: "A1",
  children: [
    {
      name: "B1",
      children: [
        {
          name: "C1",
          value: 100,
        },
        {
          name: "C2",
          value: 100,
        },
        {
          name: "C3",
          value: 100,
        },
      ],
    },
  ],
};

export const DATASET_3 = {
  nodes: [
    {
      id: 1,
      type: "parent",
      data: {
        name: "workload",
      },
    },
    {
      id: 2,
      type: "child",
      data: {
        name: "pod",
        children: [
          {
            name: "pod1",
            type: "pod"
          },
          {
            name: "pod2",
            type: "pod"
          },
          {
            name: "pod3",
            type: "pod"
          },
        ],
      },
      edges: [
        { source: "pod1", target: "pod3" },
        { source: "pod1", target: "pod2" },
      ],
    },
    {
      id: 3,
      type: "child",
      data: {
        name: "IP",
        children: [
          {
            name: "IP-1",
            type: "IP"
          },
          {
            name: "IP-2",
            type: "IP"
          },
          {
            name: "IP-3",
            type: "IP"
          },
          {
            name: "IP-4",
            type: "IP"
          },
          {
            name: "IP-5",
            type: "IP"
          },
          {
            name: "IP-6",
            type: "IP"
          },
        ],
      },
      edges: [
        {
          source: "IP-1",
          target: "IP-2",
        },

        {
          source: "IP-1",
          target: "IP-5",
        },

        {
          source: "IP-1",
          target: "IP-1",
        },
        {
          source: "IP-1",
          target: "IP-1",
        },
        {
          source: "IP-6",
          target: "IP-3",
        },
      ],
    },
    {
      id: 4,
      type: "child",
      data: {
        name: "SVC",
        children: [
          {
            name: "SVC-1",
            type: "SVC"
          },
          {
            name: "SVC-2",
            type: "SVC"
          },
          {
            name: "SVC-3",
            type: "SVC"
          },
        ],
      },
      show: true,
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: 1,
      target: 2,
      show: true,
    },
    {
      id: "e1-3",
      source: 2,
      target: 1,
      show: true,
    },
    {
      id: "e1-2",
      source: 1,
      target: 3,
      show: true,
    },
    {
      id: "e1-2",
      source: 1,
      target: 4,
      show: true,
    },
    {
      id: "e1-2",
      source: 4,
      target: 1,
      show: true,
    },
  ],
};
