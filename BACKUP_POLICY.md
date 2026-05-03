# Backup Policy

This document defines backup standards for Bright Horizon Odoo environments.

## Backup Storage Paths

- Local backups: `D:\Workspace\Horizon\Organizations\Bright Horizon\odoo\backups`
- Server backups: `/opt/stack/odoo/backups`

## Required Naming Pattern

All backup files must start with the container prefix.

Pattern:

`<container_prefix>_<environment>_<system>_<yyyyMMdd_HHmmss>.<ext>`

Example:

`odoo_prod_db_20260503_104500.sql.gz`

Required fields:

- `container_prefix`: container name or service prefix (required)
- `environment`: `dev`, `staging`, or `prod`
- `system`: `db`, `filestore`, or `full`
- `yyyyMMdd_HHmmss`: UTC timestamp
- `ext`: `sql.gz`, `tar.gz`, or `zip`

## Backup Frequency

- Database:
- Daily full backup at minimum
- Optional hourly incremental/logical backup for production-critical systems
- Filestore:
- Daily backup aligned with database backup window
- Full system snapshot:
- Weekly

## Retention Policy

- Daily backups: keep 30 days
- Weekly backups: keep 12 weeks
- Monthly backups: keep 12 months
- Optional yearly archival backups: keep 3 to 7 years (compliance-dependent)

## Verification and Restore Testing

- Backup verification:
- Validate archive integrity after each backup
- Verify expected file size and checksum
- Restore test schedule:
- Perform test restore weekly for latest production backup
- Perform full disaster-recovery restore drill monthly
- Record test date, operator, backup file name, duration, and outcome

## Minimum Metadata to Record

Each backup operation should log:

- Start/end time
- Source system and environment
- Backup file name
- File size and checksum
- Storage destination
- Result (`success` or `failed`)
- Error details (if failed)
