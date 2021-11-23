// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: hxnjFF4aKPQYJ3QuD1VZUf
// Component: Of26EOuuMmur
import * as React from "react";
import Head from "next/head";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: SpQrDSfZy-T/component
import Section from "../../Section"; // plasmic-import: XqCYd9Plo5RT/component
import Bullet from "../../Bullet"; // plasmic-import: oJGY9NZ5s3IK/component
import Button from "../../Button"; // plasmic-import: qufbzsruI3cM/component
import HomeCta from "../../HomeCta"; // plasmic-import: VOr_hW1BUN3/component
import Footer from "../../Footer"; // plasmic-import: f3Snupggumc/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 5twopocMqt8Y/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: hxnjFF4aKPQYJ3QuD1VZUf/projectcss
import * as sty from "./PlasmicFeatures.module.css"; // plasmic-import: Of26EOuuMmur/css

export const PlasmicFeatures__VariantProps = new Array();

export const PlasmicFeatures__ArgProps = new Array();

function PlasmicFeatures__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <Section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames("__wab_instance", sty.section)}
            hasSubtitle={"hasSubtitle"}
            hasTitle={"hasTitle"}
            subtitle={
              "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
            }
            title={"The ultimate in feature set."}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(
                defaultcss.all,
                projectcss.all,
                sty.freeBox___8OSYu
              )}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.columns__capRr
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.column__gTebB
                  )}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox__tftj5
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__y2YFb
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__b6S31
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__bCpib
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__vkzgO
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__pycyy
                      )}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jjInK
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox__rf6Su
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__vabuu
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__rhj6U
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.column__vyDPk
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__up3St)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(
                  defaultcss.all,
                  projectcss.all,
                  sty.columns___9KhZ5
                )}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.column__tIv8K
                  )}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ivzJq)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>

                <div
                  className={classNames(
                    defaultcss.all,
                    projectcss.all,
                    sty.column__roqb2
                  )}
                >
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(
                      defaultcss.all,
                      projectcss.all,
                      sty.freeBox___2D33
                    )}
                  >
                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text___3WuoI
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text___5PPuq
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__zk0Tk
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet___12IaF
                      )}
                    />

                    <Bullet
                      className={classNames(
                        "__wab_instance",
                        sty.bullet__yNvi2
                      )}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        defaultcss.__wab_text,
                        sty.text__jKtWy
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur."
                      }
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        projectcss.all,
                        sty.freeBox___5Edjm
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__bjCw0
                        )}
                        color={"blue"}
                      >
                        {"Start free trial"}
                      </Button>

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__jZgXz
                        )}
                        color={"outlineBlue"}
                      >
                        {"View demo"}
                      </Button>
                    </p.Stack>
                  </p.Stack>
                </div>
              </p.Stack>
            </p.Stack>
          </Section>

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "header", "section", "homeCta", "footer"],
  header: ["header"],
  section: ["section"],
  homeCta: ["homeCta"],
  footer: ["footer"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFeatures__ArgProps,
      internalVariantPropNames: PlasmicFeatures__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicFeatures__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatures";
  } else {
    func.displayName = `PlasmicFeatures.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatures = Object.assign(
  // Top-level PlasmicFeatures renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    section: makeNodeComponent("section"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),
    // Metadata about props expected for PlasmicFeatures
    internalVariantProps: PlasmicFeatures__VariantProps,
    internalArgProps: PlasmicFeatures__ArgProps
  }
);

export default PlasmicFeatures;
/* prettier-ignore-end */
