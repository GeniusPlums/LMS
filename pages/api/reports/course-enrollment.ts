// pages/api/reports/course-enrollment.ts
import { getEnrollmentReport } from '../../../services/reportService';

export default async function handler(req, res) {
  const report = await getEnrollmentReport();
  res.status(200).json(report);
}