import { createSlice } from "@reduxjs/toolkit";

const complaintsInitialState = {
  pagination: {
    activePage: 1,
    pageNumber: 1,
    pageSize: 10,
    totalRecords: 0,
  },
  data: {
    ["1"]: [
      {
        complaintId: "CMPT-001",
        subject: "Problem with online checkout",
        submissionDate: 1756598400000, // Aug 30, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-002",
        subject: "Damaged item received",
        submissionDate: 1756512000000, // Aug 29, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-003",
        subject: "Unauthorised transaction on account",
        submissionDate: 1756425600000, // Aug 28, 2025
        status: "rejected",
      },
      {
        complaintId: "CMPT-004",
        subject: "Late delivery of order #98765",
        submissionDate: 1756252800000, // Aug 26, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-005",
        subject: "Poor customer service experience",
        submissionDate: 1756166400000, // Aug 25, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-006",
        subject: "Subscription billing error",
        submissionDate: 1756080000000, // Aug 24, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-007",
        subject: "Website not working correctly",
        submissionDate: 1755907200000, // Aug 22, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-008",
        subject: "Defective product, need replacement",
        submissionDate: 1755820800000, // Aug 21, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-009",
        subject: "Incorrect item was shipped",
        submissionDate: 1755734400000, // Aug 20, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-010",
        subject: "Refund not processed",
        submissionDate: 1755648000000, // Aug 19, 2025
        status: "resolved",
      },
    ],
    ["2"]: [
      {
        complaintId: "CMPT-011",
        subject: "Missing item in order #12345",
        submissionDate: 1755561600000, // Aug 18, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-012",
        subject: "Issue with warranty claim",
        submissionDate: 1755475200000, // Aug 17, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-013",
        subject: "Product advertisement was misleading",
        submissionDate: 1755388800000, // Aug 16, 2025
        status: "rejected",
      },
      {
        complaintId: "CMPT-014",
        subject: "Can't log into my account",
        submissionDate: 1755302400000, // Aug 15, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-015",
        subject: "Billing charge is higher than expected",
        submissionDate: 1755216000000, // Aug 14, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-016",
        subject: "Technical support was not helpful",
        submissionDate: 1755129600000, // Aug 13, 2025
        status: "rejected",
      },
      {
        complaintId: "CMPT-017",
        subject: "Broken packaging on delivery",
        submissionDate: 1755043200000, // Aug 12, 2025
        status: "resolved",
      },
      {
        complaintId: "CMPT-018",
        subject: "Delivery to wrong address",
        submissionDate: 1754956800000, // Aug 11, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-019",
        subject: "Product does not match description",
        submissionDate: 1754870400000, // Aug 10, 2025
        status: "pending",
      },
      {
        complaintId: "CMPT-020",
        subject: "Order cancelled without my consent",
        submissionDate: 1754784000000, // Aug 9, 2025
        status: "resolved",
      },
    ],
  },
};

const complaintsSlice = createSlice({
  name: "complaints",
  initialState: complaintsInitialState,
  reducers: {},
});

export default complaintsSlice;
