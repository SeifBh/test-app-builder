import { IgrButton, IgrButtonModule, IgrDialog, IgrDialogModule, IgrDropdown, IgrDropdownItem, IgrDropdownItemModule, IgrDropdownModule, IgrInput, IgrInputModule, IgrRipple, IgrRippleModule, IgrSelect, IgrSelectItem, IgrSelectModule, IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import { IgrColumn, IgrGrid, IgrGridModule } from 'igniteui-react-grids';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useGetCustomers } from '../hooks/northwind-hooks';
import 'igniteui-react-grids/grids';
import styles from './accounts.module.css';
import createClassTransformer from '../style-utils';

IgrButtonModule.register();
IgrDialogModule.register();
IgrDropdownItemModule.register();
IgrDropdownModule.register();
IgrGridModule.register();
IgrInputModule.register();
IgrRippleModule.register();
IgrSelectModule.register();
IgrTextareaModule.register();

export default function Accounts() {
  const classes = createClassTransformer(styles);
  const uuid = () => crypto.randomUUID();
  const navigate = useNavigate();
  const dropdown = useRef<IgrDropdown>(null);
  const newAccountDialog = useRef<IgrDialog>(null);
  const [value, setValue] = useState<string | undefined>('2');
  const [value1, setValue1] = useState<string | undefined>('1');
  const { northwindCustomers } = useGetCustomers();

  return (
    <>
      <div className={classes("row-layout accounts-container")}>
        <div className={classes("row-layout group")}>
          <div className={classes("column-layout group_1")}>
            <div className={classes("column-layout group_2")}>
              <div className={classes("row-layout header")}>
                <div className={classes("row-layout page-title")}>
                  <div className={classes("row-layout group_3")}>
                    <img src="/src/assets/Accounts Icon - Green.svg" className={classes("image")} />
                  </div>
                  <h6 className={classes("h6")}>
                    <span>Accounts</span>
                  </h6>
                </div>
                <div className={classes("row-layout buttons")}>
                  <IgrButton variant="flat" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button button_2")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>business</span>
                    </span>
                    <span key={uuid()}>New Account</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button button_3")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>search</span>
                    </span>
                    <span key={uuid()}>Discover companies</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrButton variant="flat" className={classes("button button_4")}>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>import_export</span>
                    </span>
                    <span key={uuid()}>Import</span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                </div>
              </div>
              <div className={classes("row-layout filters-and-sorting")}>
                <div className={classes("row-layout group_4")}>
                  <IgrSelect outlined="false" value={value} change={(_c, e) => setValue(e.detail.value)} className={classes("select")}>
                    <IgrSelectItem value="1" key="7f02b4eb-7c91-427a-b8a0-41961aaaff99">
                      <span key={uuid()}>My Accounts</span>
                    </IgrSelectItem>
                    <IgrSelectItem value="2" key="c7b20098-efc9-45de-9da0-7c6fa8f004a2">
                      <span key={uuid()}>All Accounts</span>
                    </IgrSelectItem>
                  </IgrSelect>
                  <IgrInput placeholder="Search accounts" outlined="false" className={classes("input")}>
                    <span slot="prefix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                </div>
                <div className={classes("row-layout group_5")}>
                  <IgrButton variant="flat" clicked={(e: any) => dropdown?.current?.toggleTarget(e.target || e.i.nativeElement)} className={classes("button button_5")}>
                    <span key={uuid()}>Recently Updated</span>
                    <span className={classes("material-icons icon")} key={uuid()}>
                      <span key={uuid()}>keyboard_arrow_down</span>
                    </span>
                    <IgrRipple key={uuid()}></IgrRipple>
                  </IgrButton>
                  <IgrDropdown ref={dropdown} className={classes("dropdown")}>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Name</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem key={uuid()}>
                      <span key={uuid()}>Recently Updated</span>
                    </IgrDropdownItem>
                  </IgrDropdown>
                </div>
              </div>
            </div>
            <div style={{display: 'contents'}} onClick={() => navigate(`/account-sample`)}>
              <IgrGrid data={northwindCustomers} primaryKey="contactName" allowFiltering="true" filterMode="excelStyleFilter" className={classes("ig-typography ig-scrollbar grid")}>
                <IgrColumn field="customerID" dataType="string" header="customerID" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="companyName" dataType="string" header="companyName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactName" dataType="string" header="contactName" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="contactTitle" dataType="string" header="contactTitle" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.street" dataType="string" header="street" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.city" dataType="string" header="city" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.region" dataType="string" header="region" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.postalCode" dataType="string" header="postalCode" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.country" dataType="string" header="country" sortable="true" selectable="false"></IgrColumn>
                <IgrColumn field="address.phone" dataType="string" header="phone" sortable="true" selectable="false"></IgrColumn>
              </IgrGrid>
            </div>
          </div>
        </div>
        <IgrDialog closeOnOutsideClick="true" ref={newAccountDialog}>
          <div className={classes("column-layout group_6")} key={uuid()}>
            <h6 className={classes("h6_1")}>
              <span>New Account</span>
            </h6>
            <div className={classes("column-layout group_7")}>
              <div className={classes("column-layout group_8")}>
                <p className={classes("typography__subtitle-2 text")}>
                  <span>ACCOUNT INFORMATION</span>
                </p>
                <div className={classes("row-layout group_9")}>
                  <div className={classes("column-layout group_10")}>
                    <IgrInput label="Account Name" outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrSelect outlined="false" label="Type" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="832dd8eb-3995-43bd-8c34-ef153ba48598">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="ad3a402a-b2f9-43d9-89cb-88a3be1fc1db">
                        <span key={uuid()}>Analyst</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="5ee96e79-1999-41f5-9865-28cd2d8d9e0c">
                        <span key={uuid()}>Competitor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="8a58ec31-348e-41cc-bff2-d3db5c4b2e39">
                        <span key={uuid()}>Customer</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="198d2205-d253-4a1b-baa1-4cdc27b52cb5">
                        <span key={uuid()}>Integrator</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="7114b37e-a716-4fae-a6a9-65833e320fc3">
                        <span key={uuid()}>Investor</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="5b244934-9945-4532-8c2c-75f0e903c20b">
                        <span key={uuid()}>Partner</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="ca03893f-539a-49fd-9420-937e0c89cd78">
                        <span key={uuid()}>Press</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="9" key="ca2c4986-bb9e-4fee-bbf2-713699109898">
                        <span key={uuid()}>Prospect</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="10" key="10500a8d-4acb-46d8-aa3d-f12ac0f87a7e">
                        <span key={uuid()}>Reseller</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="11" key="d1f99a36-e854-4b77-9fc1-fc635bec61ab">
                        <span key={uuid()}>Other</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrInput label="Website" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrTextarea label="Description" outlined="false" className={classes("user-input")}></IgrTextarea>
                  </div>
                  <div className={classes("column-layout group_10")}>
                    <div className={classes("column-layout group_11")}>
                      <p className={classes("typography__caption text_1")}>
                        <span>Account Owner</span>
                      </p>
                      <p className={classes("typography__body-1 text_2")}>
                        <span>Andrea Silveira</span>
                      </p>
                    </div>
                    <IgrInput label="Parent Account" placeholder="Search Accounts..." outlined="false" className={classes("user-input")}>
                      <span slot="suffix" key={uuid()}>
                        <span className={classes("material-icons icon_1")} key={uuid()}>
                          <span key={uuid()}>search</span>
                        </span>
                      </span>
                    </IgrInput>
                    <IgrInput type="tel" label="Phone" outlined="false" className={classes("user-input")}></IgrInput>
                    <IgrSelect outlined="false" label="Industry" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input")}>
                      <IgrSelectItem value="1" key="c4ee4103-714b-4d50-898f-a5984e5ba55f">
                        <span key={uuid()}>-- None --</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="3acd03da-a8cd-40bb-9961-90ea58108013">
                        <span key={uuid()}>Agriculture</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="c407fe09-976e-4190-95fc-c295d5f60a2c">
                        <span key={uuid()}>Apparel</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="fdf41062-06c2-469b-a16d-e8c4dcf95cbb">
                        <span key={uuid()}>Banking</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="e50997fd-cf86-4ed7-b497-6ea9b262c264">
                        <span key={uuid()}>Biotechnology</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="6" key="7baa949f-671f-411d-86a4-6f0b987224bc">
                        <span key={uuid()}>Chemicals</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="7" key="76db77c0-2cec-4c6f-9f1b-61aa8b2a492b">
                        <span key={uuid()}>Communications</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="8" key="7967f98c-70d2-43f5-926b-1ce31b1dd404">
                        <span key={uuid()}>Construction</span>
                      </IgrSelectItem>
                    </IgrSelect>
                    <IgrSelect outlined="false" label="Employees" className={classes("user-input")}>
                      <IgrSelectItem value="1" key="c4fabedc-3ae1-44b8-bfd6-6b6144111825">
                        <span key={uuid()}>Self Employed</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="2d572640-66b6-4e27-8f5f-6d4b7fed6de3">
                        <span key={uuid()}>1-10</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="3" key="f854a41f-b96c-4483-a77a-35fa69da3a17">
                        <span key={uuid()}>11-50</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="4" key="411bd5a8-f2de-4c3e-8ddf-86a76e7aedd2">
                        <span key={uuid()}>51-250</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="5" key="6e0d6ddd-cbd0-4d6b-a8e4-111326418d13">
                        <span key={uuid()}>+250</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
              <div className={classes("row-layout group_12")}>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>BILLING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="5b189902-f35d-4890-8667-152a8d1f7f1f">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="45dd4d4d-b4bf-407b-a838-df7da6f3d141">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="df2cd449-cfbb-4c34-a8a7-4fb7d218085f">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="95500f8b-14fb-41b1-84d0-07144d780db3">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="2af80613-89f9-4465-b299-9cc9303dad60">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
                <div className={classes("column-layout group_10")}>
                  <p className={classes("typography__subtitle-2 text_3")}>
                    <span>SHIPPING INFORMATION</span>
                  </p>
                  <IgrInput label="Address" placeholder="Search Address" outlined="false" className={classes("user-input")}>
                    <span slot="suffix" key={uuid()}>
                      <span className={classes("material-icons icon_1")} key={uuid()}>
                        <span key={uuid()}>search</span>
                      </span>
                    </span>
                  </IgrInput>
                  <IgrInput label="Street" outlined="false" className={classes("user-input")}></IgrInput>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="City" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrInput label="State / Province" outlined="false" className={classes("user-input_2")}></IgrInput>
                  </div>
                  <div className={classes("row-layout group_13")}>
                    <IgrInput label="Zip / Postal Code" outlined="false" className={classes("user-input_2")}></IgrInput>
                    <IgrSelect outlined="false" label="Country" value={value1} change={(_c, e) => setValue1(e.detail.value)} className={classes("user-input_2")}>
                      <IgrSelectItem value="2" key="b98656a1-265a-4d8c-99e5-7fa0cf6c454a">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="8638dccd-76e3-4b03-9d0b-dac5c804b1b6">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="6fe8fab9-c968-4a0c-8b7b-dce1d7d28b9f">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="5e3e48d8-a967-4cfd-a50a-43a1e66ea29d">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                      <IgrSelectItem value="2" key="27f8809a-4878-4844-af35-55b66c18a85a">
                        <span key={uuid()}>Country 1</span>
                      </IgrSelectItem>
                    </IgrSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div slot="footer" key={uuid()}>
            <IgrButton variant="flat" clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1")} key={uuid()}>
              <span key={uuid()}>Cancel</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
            <IgrButton clicked={() => newAccountDialog?.current?.toggle()} className={classes("button_1 button_1_1")} key={uuid()}>
              <span key={uuid()}>Save</span>
              <IgrRipple key={uuid()}></IgrRipple>
            </IgrButton>
          </div>
        </IgrDialog>
      </div>
    </>
  );
}
