# Lifecycle and Change Detection

## Learning Objectives
- Implement lifecycle hooks and understand when each one fires
- Compare Default and OnPush change detection strategies
- Use ChangeDetectorRef to manually control change detection
- Explain how zone.js triggers change detection and how NgZone works
- Understand zoneless change detection
- Describe how Angular Signals interact with the change detection system

## Key Concepts
Angular components go through a lifecycle from creation to destruction, with hooks that let you tap into key moments like initialization, input changes, and cleanup. Change detection is the mechanism Angular uses to keep the DOM in sync with component state. The Default strategy checks every component on every event, while OnPush limits checks to components whose inputs have changed or that are explicitly marked dirty. Zone.js patches async APIs to trigger change detection automatically, but Angular is moving toward zoneless operation driven by Signals.

## Topics Covered
- Lifecycle hooks (ngOnInit, ngOnChanges, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy)
- Change detection strategies (Default vs OnPush)
- ChangeDetectorRef (detectChanges, markForCheck)
- zone.js and NgZone
- Zoneless change detection
- Angular Signals and change detection

## Prerequisites
- 03-angular/02-components-and-templates
- 03-angular/05-services-and-di
- 03-angular/10-state-management (Signals basics)

## Resources
- TODO: Add resources

## Exercises
- TODO: Add exercises
