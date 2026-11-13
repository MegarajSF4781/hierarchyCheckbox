import{j as e}from"./index-CTAXdLKx.js";import{r as p}from"./index-D5jfS-9e.js";import{u as x,G as d,a as n,C as o,b as r}from"./useGridTheme-BHGR8Ryk.js";import{u as g}from"./useFilter-DIX9PFQi.js";import"./client-Spw3EFno.js";import{u as h}from"./usePager-CYDRPftN.js";const y=[{id:1,name:"Root 1",value:100,children:[{id:11,name:"Child 1.1",value:10,children:[{id:111,name:"Grandchild 1.1.1",value:1},{id:112,name:"Grandchild 1.1.2",value:2}]},{id:12,name:"Child 1.2",value:20,children:[{id:121,name:"Grandchild 1.2.1",value:3},{id:122,name:"Grandchild 1.2.2",value:4}]},{id:13,name:"Child 1.3",value:30,children:[{id:131,name:"Grandchild 1.3.1",value:5},{id:132,name:"Grandchild 1.3.2",value:6}]}]},{id:2,name:"Root 2",value:200,children:[{id:21,name:"Child 2.1",value:40,children:[{id:211,name:"Grandchild 2.1.1",value:7},{id:212,name:"Grandchild 2.1.2",value:8}]},{id:22,name:"Child 2.2",value:50,children:[{id:221,name:"Grandchild 2.2.1",value:9},{id:222,name:"Grandchild 2.2.2",value:10}]},{id:23,name:"Child 2.3",value:60,children:[{id:231,name:"Grandchild 2.3.1",value:11},{id:232,name:"Grandchild 2.3.2",value:12}]}]},{id:3,name:"Root 3",value:300,children:[{id:31,name:"Child 3.1",value:70,children:[{id:311,name:"Grandchild 3.1.1",value:13},{id:312,name:"Grandchild 3.1.2",value:14}]}]}],a=()=>{x("material");const t=p.useRef(null),i=y;return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h1",{children:"TreeGrid - Hierarchy Checkbox Modes"}),e.jsxs("p",{children:["Each tab shows the same tree-data grid with a different"," ",e.jsx("code",{children:"treeHierarchyCheckboxMode"}),". The hierarchy checkbox in the ",e.jsx("strong",{children:"Name"})," column is independent of row selection: it marks records as checked in a persistent set, never modifies row selection, and never fires row-selection events."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Try this:"})," in the ",e.jsx("em",{children:"Hierarchy"})," tab, check a parent - all descendants cascade. Navigate to another page and back; the state persists. Sort or filter; the state persists. Compare with ",e.jsx("em",{children:"Self"}),", where only the targeted row toggles."]}),e.jsx("h2",{style:{marginTop:"24px"},children:"Self (no cascade)"}),e.jsx(d,{ref:t,dataSource:i,rowHeight:50,isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",treeHierarchyCheckboxMode:"Self",height:"400px",style:{marginTop:"8px"},pageSettings:{enabled:!0,pageSize:8,pageCount:3},modules:{TreeDataModule:n,PagerModule:h},children:e.jsxs(o,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"80",type:"number"}),e.jsx(r,{field:"name",headerText:"Name (Self)",width:"200",showCheckbox:!0}),e.jsx(r,{field:"value",headerText:"Value",width:"100",type:"number"})]})}),e.jsx("h2",{style:{marginTop:"32px"},children:"Hierarchy (cascade)"}),e.jsx(d,{ref:t,dataSource:i,rowHeight:50,isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",treeHierarchyCheckboxMode:"Hierarchy",height:"400px",style:{marginTop:"8px"},pageSettings:{enabled:!0,pageSize:8,pageCount:3},modules:{TreeDataModule:n,PagerModule:h},children:e.jsxs(o,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"80",type:"number"}),e.jsx(r,{field:"name",headerText:"Name (Hierarchy)",width:"200",showCheckbox:!0}),e.jsx(r,{field:"value",headerText:"Value",width:"100",type:"number"})]})}),e.jsx("h2",{style:{marginTop:"32px"},children:"FilteredHierarchy (visible descendants only)"}),e.jsx(d,{ref:t,dataSource:i,rowHeight:50,isTreeMode:!0,treeColumnIndex:1,treeDataChildrenField:"children",treeHierarchyCheckboxMode:"FilteredHierarchy",filterSettings:{enabled:!0,type:"FilterBar"},height:"400px",style:{marginTop:"8px"},pageSettings:{enabled:!0,pageSize:6,pageCount:3},modules:{TreeDataModule:n,PagerModule:h,FilterModule:g},children:e.jsxs(o,{children:[e.jsx(r,{field:"id",headerText:"ID",width:"80",type:"number"}),e.jsx(r,{field:"name",headerText:"Name (FilteredHierarchy)",width:"240",showCheckbox:!0}),e.jsx(r,{field:"value",headerText:"Value",width:"100",type:"number"})]})})]})},v={title:"TreeGrid/Hierarchy Checkbox Modes",component:a};var l,s,c,u,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`(): React.ReactElement => {
  useGridTheme('material');
  const gridRef: React.RefObject<GridRef<TreeNode>> = useRef<GridRef<TreeNode>>(null);
  const dataSource: TreeNode[] = hierarchyCheckboxData;
  return <div style={{
    padding: '20px'
  }}>\r
            <h1>TreeGrid - Hierarchy Checkbox Modes</h1>\r
            <p>\r
                Each tab shows the same tree-data grid with a different{' '}\r
                <code>treeHierarchyCheckboxMode</code>. The hierarchy\r
                checkbox in the <strong>Name</strong> column is independent of row\r
                selection: it marks records as checked in a persistent set, never\r
                modifies row selection, and never fires row-selection events.\r
            </p>\r
            <p>\r
                <strong>Try this:</strong> in the <em>Hierarchy</em> tab, check a\r
                parent - all descendants cascade. Navigate to another page and\r
                back; the state persists. Sort or filter; the state persists.\r
                Compare with <em>Self</em>, where only the targeted row toggles.\r
            </p>\r
\r
            <h2 style={{
      marginTop: '24px'
    }}>Self (no cascade)</h2>\r
            <Grid ref={gridRef as unknown as React.RefObject<GridRef<unknown>>} dataSource={dataSource as unknown as object[]} rowHeight={50} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" treeHierarchyCheckboxMode="Self" height="400px" style={{
      marginTop: '8px'
    }} pageSettings={{
      enabled: true,
      pageSize: 8,
      pageCount: 3
    }} modules={{
      TreeDataModule,
      PagerModule
    }}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="80" type="number" />\r
                    <Column field="name" headerText="Name (Self)" width="200" showCheckbox />\r
                    <Column field="value" headerText="Value" width="100" type="number" />\r
                </Columns>\r
            </Grid>\r
\r
            <h2 style={{
      marginTop: '32px'
    }}>Hierarchy (cascade)</h2>\r
            <Grid ref={gridRef as unknown as React.RefObject<GridRef<unknown>>} dataSource={dataSource as unknown as object[]} rowHeight={50} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" treeHierarchyCheckboxMode="Hierarchy" height="400px" style={{
      marginTop: '8px'
    }} pageSettings={{
      enabled: true,
      pageSize: 8,
      pageCount: 3
    }} modules={{
      TreeDataModule,
      PagerModule
    }}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="80" type="number" />\r
                    <Column field="name" headerText="Name (Hierarchy)" width="200" showCheckbox />\r
                    <Column field="value" headerText="Value" width="100" type="number" />\r
                </Columns>\r
            </Grid>\r
\r
            <h2 style={{
      marginTop: '32px'
    }}>FilteredHierarchy (visible descendants only)</h2>\r
            <Grid ref={gridRef as unknown as React.RefObject<GridRef<unknown>>} dataSource={dataSource as unknown as object[]} rowHeight={50} isTreeMode={true} treeColumnIndex={1} treeDataChildrenField="children" treeHierarchyCheckboxMode="FilteredHierarchy" filterSettings={{
      enabled: true,
      type: 'FilterBar'
    }} height="400px" style={{
      marginTop: '8px'
    }} pageSettings={{
      enabled: true,
      pageSize: 6,
      pageCount: 3
    }} modules={{
      TreeDataModule,
      PagerModule,
      FilterModule
    }}>\r
                <Columns>\r
                    <Column field="id" headerText="ID" width="80" type="number" />\r
                    <Column field="name" headerText="Name (FilteredHierarchy)" width="240" showCheckbox />\r
                    <Column field="value" headerText="Value" width="100" type="number" />\r
                </Columns>\r
            </Grid>\r
        </div>;
}`,...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source},description:{story:`Story: TreeGrid - Hierarchy Checkbox Modes.\r

Demonstrates the per-column \`showCheckbox\` toggle plus the three\r
\`treeHierarchyCheckboxMode\` values:\r

  - Self              - Only the targeted row toggles.\r
  - Hierarchy         - Cascades to all descendants; ancestors recompute\r
                        (checked / indeterminate / unchecked).\r
  - FilteredHierarchy - Same as Hierarchy, but only descendants present in\r
                        the current view are affected (collapsed or\r
                        filtered-out descendants are skipped).\r

\`treeHierarchyCheckboxMode\` is the convenience top-level prop; you can\r
also pass \`treeDataSettings={{ enabled: true, hierarchyCheckboxMode: '...' }}\`\r
if you already use the consolidated \`treeDataSettings\` object for other\r
options.\r

Persistence: the hierarchy-check state is keyed by identity (\`treeKey\`)\r
and survives paging, sorting, and filtering. Try this: in the Hierarchy\r
tab, check a row, navigate to page 2, then navigate back - the state\r
is preserved.\r

Selection independence: the hierarchy checkbox never modifies the row\r
selection state and never fires row-selection events. Try clicking a\r
hierarchy checkbox and then clicking a regular row - the row selects\r
but does not toggle the hierarchy state.\r

@returns {React.ReactElement} The rendered story panel.`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.description}}};const H=["TreeGridHierarchyCheckbox"];export{a as TreeGridHierarchyCheckbox,H as __namedExportsOrder,v as default};
